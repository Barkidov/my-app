const Rating = () => {
  console.log("Rating render");
  return (
    <div>
      <Star selected={true} />
      <Star selected={true} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
    </div>
  );
};

const Star = (props: any) => {
  console.log("Star render");
  if (props.selected === true) {
    return (
      <span>
        <b>star </b>
      </span>
    );
  } else {
    return <span>star </span>;
  }
};

export default Rating;
