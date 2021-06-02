const postImages = [
  'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  'https://images.pexels.com/photos/2254030/pexels-photo-2254030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260',
  'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260',
  'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260',
  'https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260',
  'https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260',
  'https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260',
  'https://images.pexels.com/photos/3348363/pexels-photo-3348363.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
]

export const getRandomPostImage = () => {
  const rndIndex = Math.floor(postImages.length * Math.random());

  return postImages[rndIndex];
}