import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React, { useEffect } from 'react';
import appConfig from '../config.json';

export default function ChatPage() {

   const [mensagem, setMensagem] = React.useState()
   const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

   function handleNovaMensagem(novaMensagem) {
      const mensagem = {
         id: listaDeMensagens.length + 1,
         de: 'Renato0402',
         texto: novaMensagem,

      }
      setListaDeMensagens([
         //Colocar os itens da listaDeMensagens no setListaDeMensagenas
         //mais a nova mensagem
         mensagem,
         ...listaDeMensagens
         
      ])
      setMensagem("")
   }

   return (
      <Box
         styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
            color: appConfig.theme.colors.neutrals['000']
         }}
      >
         <Box
            styleSheet={{
               display: 'flex',
               flexDirection: 'column',
               flex: 1,
               boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
               borderRadius: '5px',
               backgroundColor: appConfig.theme.colors.neutrals[700],
               height: '100%',
               maxWidth: '95%',
               maxHeight: '95vh',
               padding: '32px',
            }}
         >
            <Header />

            <Box
               styleSheet={{
                  position: 'relative',
                  display: 'flex',
                  flex: 1,
                  height: '80%',
                  backgroundColor: appConfig.theme.colors.neutrals[600],
                  flexDirection: 'column',
                  borderRadius: '5px',
                  padding: '16px',
               }}
            >

               <MessageList mensagens={listaDeMensagens} />
               {/*{listaDeMensagens.map((mensagemAtual)=>{
                       
                       return (
                          <li key={mensagemAtual.id}>
                             {mensagemAtual.de}:{mensagemAtual.texto}
                          </li>
                       )
               })}*/}

               <Box
                  as="form"
                  styleSheet={{
                     display: 'flex',
                     alignItems: 'center',
                  }}
               >
                  <TextField
                     onChange={(event) => {
                        setMensagem(event.target.value)

                     }}
                     onKeyPress={(event) => {
                        if (event.code == "Enter") {
                           event.preventDefault()
                           handleNovaMensagem(mensagem);
                        }
                     }}
                     value={mensagem}
                     placeholder="Insira sua mensagem aqui..."
                     type="textarea"
                     styleSheet={{
                        width: '100%',
                        border: '0',
                        resize: 'none',
                        borderRadius: '5px',
                        padding: '6px 8px',
                        backgroundColor: appConfig.theme.colors.neutrals[800],
                        marginRight: '12px',
                        color: appConfig.theme.colors.neutrals[200],
                     }}
                  />
               </Box>
            </Box>
         </Box>
      </Box>
   )
}

function Header() {
   return (
      <>
         <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
            <Text variant='heading5'>
               Chat
            </Text>
            <Button
               variant='tertiary'
               colorVariant='neutral'
               label='Logout'
               href="/"
            />
         </Box>
      </>
   )
}

function MessageList(props) {

   return (
      <Box
         tag="ul"
         styleSheet={{
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column-reverse',
            flex: 1,
            color: appConfig.theme.colors.neutrals["000"],
            marginBottom: '16px',
         }}
      >
         {props.mensagens.map((mensagem) => {

            return (

               <Text
                  key={mensagem.id}
                  tag="li"
                  styleSheet={{
                     borderRadius: '5px',
                     padding: '6px',
                     marginBottom: '12px',
                     hover: {
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                     }
                  }}
               >
                  <Box
                     styleSheet={{
                        marginBottom: '8px',
                     }}
                  >
                     <Image
                        styleSheet={{
                           float:'left',
                           width: '20px',
                           height: '20px',
                           borderRadius: '50%',
                           display: 'inline-block',
                           marginRight: '8px',
                        }}
                        src={`https://github.com/Renato0402.png`}
                     />
                     <Text styleSheet={{
                        display:'inline-block'
                     }}
                     tag="strong">
                        {mensagem.de}
                        
                     </Text>
                     <Text
                        styleSheet={{
                           display:'inline-block',
                           fontSize: '10px',
                           marginLeft: '8px',
                           color: appConfig.theme.colors.neutrals[300],
                        }}
                        tag="span"
                     >
                        {(new Date().toLocaleDateString())}
                     </Text>
                  </Box>
                  {mensagem.texto}
               </Text>
            )
         })}

      </Box>
   )
}