// src/components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Bharath Velamala. All rights reserved.</p>
          <p>
            <a href="https://github.com/bharath03-a" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>{' '}
            |{' '}
            <a href="https://linkedin.com/in/bharath-velamala-570578181" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  