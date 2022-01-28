import errogif from '../assets/erro404.gif';

export default function Custom404(){

    return(
         
       <>
        <img src={errogif.src} class="size"/>

        <style jsx>{`
          
          .size {
            
            width:0;
            height:0;
          }

        `}

        </style>

        </>
    );
}