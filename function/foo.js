function foo(cart) {
  return cart.push(1);
}


function main() {
  let cart = []
  const ten = foo(cart);
  console.log(ten);
}


main();
