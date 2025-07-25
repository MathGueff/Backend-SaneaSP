import express, { NextFunction, Request, Response } from "express";
import { deleteReclamacao, getAllReclamacoes, getById, getByUsuario, postReclamacao, putReclamacao, getByCategoria } from "../controllers/reclamacao.controller";
import { ICreateReclamacao, IFilterListReclamacao } from "../interfaces/IReclamacao.interface";
import { validateToken } from "../middlewares/auth.middleware";

const router = express.Router()


router.get('/', async (req: Request, res: Response) => {
    const query : IFilterListReclamacao = req.query
    const foundReclamacoes = await getAllReclamacoes(query);
    res.status(200).json(foundReclamacoes);
});

router.get('/usuario',validateToken, async (req: Request, res: Response)=>{
    const idUsuario = req.user.id as number;
    const reclamacoes = await getByUsuario(idUsuario);
    res.status(200).json(reclamacoes);
})

router.get('/categorias', async (req: Request, res: Response)=>{
    let listCategoriaId : number[] = [];
    let listaQuery !: string[];
    let idUsuario : number | undefined;

    if(!req.query.categorias){
        res.status(400).json({
            error: true,
            message: `Nenhuma categoria foi informada`,
        });
        return;
    }

    if(Array.isArray(req.query.categorias)){
        listaQuery = req.query.categorias as string[];
        listCategoriaId = listaQuery.map(id => Number(id));
    }
    else{
        listCategoriaId.push(Number(req.query.categorias as string));
    }

    if(req.query.idUsuario){
        idUsuario = Number(req.query.idUsuario);
    }
    const reclamacoes = await getByCategoria(listCategoriaId,idUsuario);
    res.json(reclamacoes);
})

router.get('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const reclamacao = await getById(id);
    res.status(200).json(reclamacao);
})

router.use(validateToken);

router.post('/', async (req: Request, res: Response) =>{
    const body:ICreateReclamacao = req.body;
    body.idUsuario = req.user.id as number;
    const reclamacao = await postReclamacao(body);
    res.status(201).json(reclamacao);
})

router.put('/:id', async (req:Request, res: Response) =>{
    const id = Number(req.params.id);
    const body = req.body;

    //Verifica se existe a reclamação com o id passado, caso contrário lança ApiError
    await getById(id);
    const result = await putReclamacao(id,body);
    res.status(200).json(result)
});

router.delete('/:id',async(req:Request,res:Response)=>{
    const idReclamacao = Number(req.params.id);
    const result = await deleteReclamacao(idReclamacao);
    res.status(200).json(result)
});

export default router