import Titulo from "../Titulo/Titulo";

function Main(){
    const filmes = [
        {titulo: "Adão Negro", ano: "2022", destaque:true, img: "https://www.ultimato.com.br/image/atualiza_home/principal/ultimas/opiniao/2022/10_out/opi_1-11-22_carlos_caldas_adao_negro.jpg"},
        {titulo: "Destinos à Deriva", ano: "2023", destaque:false, img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMhpwzh3_dYCpiZCQxKCrvNguN2Xpi1UQ2Kv4q85wfKsBxuDD1"},
        {titulo: "Besouro Azul", ano: "2023", destaque:true, img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLXZb6z_VGWUc5O-s7iMJ8QVWQNa3b6hp6HawTsbW8dOJ1RQxh"},
        {titulo: "The Flash", ano: "2023", destaque:true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bZDHaMzRqHvd1vhZ03ciz3n1xhRCOExVJFlhZb2qakiL1QW5"},
        {titulo: "Agente Stone", ano: "2023", destaque:false, img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQiTZv_5knCVfNvdKyjQfCAhkJtQkHrxd3O7gOzSV23mY7IRTkh"},
        {titulo: "Extraction 2", ano: "2023", destaque:true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShiMFIVS1IlhbPeYqvmo312HreDEngS3Yz8WmmcZCfOU0XRStW"},
    ]

    const series = [
        {titulo: "Com Carinho, Kitty", ano: "2022", destaque:true, img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbWLsga6G0fne1sHou6a2jN3tM2eF_D-7bUdEF6PejCvAJQAYQ"},
        {titulo: "Sorriso Real", ano: "2023", destaque:false, img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQYFCS-4sX2yu-h3J5MxRThqg_73xyfycIL6_870zneERMTLhwJ"},
        {titulo: "One Piece: A Série", ano: "2023", destaque:true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLHIfitRT_TdxsK3ibPB85hXbMJGYM4PyLDTq_R18J_Rej4_V"},
        {titulo: "The Last of Us", ano: "2023", destaque:false, img: "https://br.web.img3.acsta.net/pictures/22/11/30/19/53/5856320.jpg"},
        {titulo: "Três Vidas", ano: "2023", destaque:true, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2A3uPJiPSVEp0noeNgI_XR6tVU56MYIniXj_rLB5fisDPeyFF"},
        {titulo: "Lockwood & Co.", ano: "2023", destaque:true, img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJ_hDN6YNdMQUbULeKGV62GQUG3kWP_z2euBNho-u06WXOlFxx"},
    ]

    return(
        <>
            <Titulo titulo="Filmes" lista={filmes}/>
            <Titulo titulo="Series" lista={series}/>
        </>
    )
}

export default Main;