export const getTotal = (cart) => {
  //   console.log(cart.values())
  let totalAmount = 0
  let totalCost = 0

  for (let item of cart.values()) {
    totalAmount += item.amount
    totalCost = item.price * totalAmount
  }

  return { totalAmount, totalCost }
}
