import Container from '@/app/(container)/Container'

export default function Home() {
  // USE CALLBACK HOOK ON THE NAV COMPONENT

  return (
    <main className="w-3/5 p-24">
      <Container />
    </main>
  )
}

//today
//navlink 

//perfromance issue
//check if there is something you can do with light house before starting
//try to use erformant strategies while building this
//use tailwind config well,
//get all font sizes youll use, colors and all repeatable dimensions in the config

//GENERAL PSEUDO CODE
//FOR THE DESKTOP, THE NAV AND THE TRENDS SECTION WILL BE ON THE LAYOUT BY THE LEFT
//FOR THE MOBILE, ITLL COME THROUGH AN HAMBURGER, SO ITLL BE IN TO THE LEFT OF -100% THEN COME IN ONCLOCIK OF THE HAMBURGER

//FOR THE PORTFOLIO SET THE PRIORITY OF THE IMAGES TO BE LOADED FIRST
