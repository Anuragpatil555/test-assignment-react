import React from 'react'

function Content() {
    return (
     <>
        <div>
            <h1 style={{fontFamily:"sans-serif",fontSize:40,color:""}}>TODAYS NEWS HEADLINES</h1>
        </div>
        <div>
            <h1 style={{fontFamily:"sans-serif",fontSize:40,textAlign:"center",backgroundColor:'GrayText'}}>PM MODI</h1>
            <img src='https://cdn.narendramodi.in/cmsuploads/0.97085800_1662186543_1155x548-exclusive-pictures-from-commissioning-ceremony-of-ins-vikrant.jpg'
                alt='modi ji ' 
                width={650} height={350}
                />
                <p style={{fontSize:40}}>* Prime Minister Narendra Modi commissioned 1st indigenous aircraft carrier  INS Vikrant. </p>
                <p style={{fontSize:40}}>* The Prime Minister said, “Vikrant is a unique reflection of India becoming self-reliant.” </p>
        </div>

        <div>
            <h1 style={{fontFamily:"sans-serif",fontSize:40,textAlign:"center",backgroundColor:"darkgray"}}>WAR UPDATE</h1>
            <img src='https://www.aljazeera.com/wp-content/uploads/2022/10/2022-10-14T081702Z_1775201153_RC2W0X92H9AE_RTRMADP_3_KAZAKHSTAN-CIS-RUSSIA.jpg?resize=1800%2C1800'
                alt='Russia ' 
                width={650} height={350}
                />
                <p style={{fontSize:40}}>* No further mass strikes on Ukraine are planned 'for now', Putin says </p>
                <p style={{fontSize:40}}>* Russian President  Putin said he had no regrets about the conflict in Ukraine </p>
        </div>

        <div>
            <h1 style={{fontFamily:"sans-serif",fontSize:40,textAlign:"center",backgroundColor:"darkgray"}}>ELON MUSk</h1>
            <img src='https://www.teslarati.com/wp-content/uploads/2022/10/elon-musk.jpeg'
                alt='elon bhai ' 
                width={650} height={350}
                />
                <p style={{fontSize:40}}>* Twitter’s  citing federal investigation on Elon Musk seems to be old news</p>
                <p style={{fontSize:40}}>* “Elon  is presently  investigation by federal authorities acquisition  Twitter,” </p>
        </div>

     </>
    )
}

export default Content
