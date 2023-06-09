import Card from './Card';

export default function Cards(props) {
   return <div>
      {props.characters.map((elemento, index) => (
         Card(elemento)   
   ))}; 
   </div>
}
