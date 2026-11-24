import ProductCard from '../components/ProductCard'

function Products() {
    return (
        <div className="productsPage">
            <h1>Our Products</h1>

            <div className="productsGrid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products



const products = [
    {
        id: 1,
        name: 'iPhone 16',
        price: 799,
        image: 'https://placehold.co/300x300',
        description: 'Apple smartphone with a powerful processor.'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S25',
        price: 899,
        image: 'https://placehold.co/300x300',
        description: 'Samsung smartphone with an excellent display.'
    },
    {
        id: 3,
        name: 'MacBook Air',
        price: 1099,
        image: 'https://placehold.co/300x300',
        description: 'Lightweight laptop for everyday work.'
    },
    {
        id: 4,
        name: 'AirPods Pro',
        price: 249,
        image: 'https://placehold.co/300x300',
        description: 'Wireless headphones with noise cancellation.'
    },
    {
        id: 5,
        name: 'iPad Air',
        price: 599,
        image: 'https://placehold.co/300x300',
        description: 'Powerful tablet for work and entertainment.'
    },
    {
        id: 6,
        name: 'Sony WH-1000XM5',
        price: 349,
        image: 'https://placehold.co/300x300',
        description: 'Premium wireless headphones.'
    },
    {
        id: 7,
        name: 'Apple Watch',
        price: 399,
        image: 'https://placehold.co/300x300',
        description: 'Smartwatch with fitness tracking.'
    },
    {
        id: 8,
        name: 'Logitech G Pro',
        price: 129,
        image: 'https://placehold.co/300x300',
        description: 'Gaming mouse with high precision.'
    },
    {
        id: 9,
        name: 'Mechanical Keyboard',
        price: 99,
        image: 'https://placehold.co/300x300',
        description: 'Mechanical keyboard for gaming and typing.'
    },
    {
        id: 10,
        name: 'Samsung Monitor',
        price: 299,
        image: 'https://placehold.co/300x300',
        description: 'High-quality monitor for everyday use.'
    }
]