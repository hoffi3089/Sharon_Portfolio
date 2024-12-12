// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Shahmir Minhas',
    image: "images/shahmir.jfif",
    designation: 'React JS | NEXT JS | Node | GraphQL',
    view: "Felix guided us through the process of creating a decentralized autonomous organization (DAO). His expertise in governance models and smart contracts was critical to our success. He is detail-oriented and committed to delivering high-quality work. I highly recommend him to anyone looking to develop a DAO or any blockchain project. 👍! 🌟",
  },
  {
    id: 1,
    name: 'Michael Johnson',
    image: "images/MichaelJohnson.jpg",
    designation: 'Product Manager at Web3 Solutions',
    view: "Felix possesses rare expertise as a full-stack blockchain developer. He not only excels in developing smart contracts using Solidity and Rust, but also seamlessly integrates these contracts with React.js and Vue.js frontends. His end-to-end development capabilities enabled us to deliver a user-friendly dApp with sophisticated smart contract interactions. His contributions were pivotal in our launch success.",
  },
  {
    id: 2,
    name: 'Sarah Ali',
    image: "images/SarahAli.jpg",
    designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
    view: "Felix's expertise in blockchain technology, especially in smart contract development and auditing, is unparalleled. His attention to detail and strong understanding of potential security risks have been instrumental in ensuring our project's success. Felix’s ability to detect and fix vulnerabilities in Solidity contracts has made our DeFi platform one of the most secure on the market.",
  },
  {
    id: 3,
    name: 'Muhammad Ullah',
    image: "images/muhammad.jpeg",
    designation: 'MERN Stack Developer at Productbox',
    view: "I highly recommend Felix for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
