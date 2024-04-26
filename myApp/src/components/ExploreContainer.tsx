import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <h3>Welcome to React Ionic</h3>
    </div>
  );
};

export default ExploreContainer;
