interface Props {
  title: string;
  description?: string;
}

export const CustomHeader = ({ title, description }: Props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <a href='https://www.facebook.com/profile.php?id=100013541311546' className='credito'>por: Francisco M. Charris C.</a>
    </div>
  );
};
