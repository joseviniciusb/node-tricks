
const myInterval = setInterval(count, 1000);

let placar = 0;
function count() {
  console.log(placar)
  return (placar += 1);

}
