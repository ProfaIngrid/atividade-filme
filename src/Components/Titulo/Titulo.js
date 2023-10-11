import './titulo.css';

function Titulo({lista, titulo}){
    return(
        <>
            <h1 className='titulo'>{titulo}</h1>
            <div className='div-titulos'>
                {
                    lista.map((l) =>
                    <div className='titulo-f'>
                        <div className='div-img'>
                            {l.destaque == true
                                ? 
                                    <div className='t-destaque'>
                                        <p>DESTACADO</p>
                                    </div>
                                : ''
                            }
                            <img src={l.img}/> 
                        </div>     
                        <h2 className='t-center'>{l.titulo}</h2>
                        <p className='t-center'>{l.ano}</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Titulo;