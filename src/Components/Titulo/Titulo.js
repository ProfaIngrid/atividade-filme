import './titulo.css';

function Titulo({lista, sessao}){
    return(
        <>
            <h1 className='titulo'>{sessao}</h1>
            <div className='div-titulos'>
                {
                    lista.map((l) =>
                    <div className='titulo-f'>
                        <img src={l.img} alt={l.titulo}/> 
                        <h2 className='t-center'>{l.titulo}</h2>
                        <p className='t-center'>{l.ano}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Titulo;