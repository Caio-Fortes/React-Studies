import Head from 'next/head'
import Button from './button'
import Image from './image'
import Lista from './lista'

const infoPage = {
  title: 'Create Next App',
  icon: "/favicon.ico",
}
//true para mostrar o Button ou false para mostrar a Image
const chooseComponent = false; 

export default function Home() {
  return (
    <>
      <Head>
        //usar para acessar os dados armazenados, acessar funções etc.
        <title>{infoPage.title}</title> 
        <link rel="icon" href={infoPage.icon} />
      </Head>
      <main>
        <div>
          <p>Exemplo de chamada de componente</p>
          <Button /> 
        </div> <br />

        <div>
          <p>estrutura condicional para chamada de componente </p>
          {chooseComponent ? (<Button />) : (<Image />)}
        </div>

        <div>
          <p>Renderizando listas em um componente</p>
          <Lista />
        </div>
      </main>
    </>
  )
}
