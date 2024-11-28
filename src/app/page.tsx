import Image from 'next/image';
import './styles.css'; // Import your custom CSS file
import Link from 'next/link';
import { FaHome, FaUser, FaCode, FaProjectDiagram } from 'react-icons/fa'; // Import icons

const Page = () => {
  return (
    <div className="flex-center">
      {/* Circle Container */}
      <div className="circle-container">
        
        {/* Image Inside Circle */}
        <div className="circle-image-container">
          <Link href="/hero">
            <Image 
              src="/rotate.png" // Replace with your image path
              alt="Description of image"
              width={460} // Set your desired width (adjusted for large screens)
              height={400} // Set your desired height (adjusted for large screens)
              className="circle-image"
            />
          </Link>
        </div>

        {/* Navigation Links Around the Circle */}
        <Link href="/hero" className="nav-link home">
          <FaHome />
        </Link>

        <Link href="/contact" className="nav-link user">
          <FaUser />
        </Link>

        <Link href="/skills" className="nav-link code">
          <FaCode />
        </Link>

        <Link href="/projects" className="nav-link projects">
          <FaProjectDiagram />
        </Link>
      </div>

      {/* Main Heading */}
      <h1 className="main-heading">
        Welcome to my Portfolio
      </h1>
    </div>
  );
};

export default Page;
