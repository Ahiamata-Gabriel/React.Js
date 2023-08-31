import { useParams } from 'react-router-dom';

const VanDetails = () => {
  const params = useParams();
  console.log(params);

  return <div>VanDetails</div>;
};

export default VanDetails;
