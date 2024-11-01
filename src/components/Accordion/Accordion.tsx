const Accordion = (props: any) => {
  console.log("Accordion render");
  return (
    <div>
      <AccordionTitle title={'Меню'}/>
      <AccordionBody />
    </div>
  );
};

const AccordionTitle = (props: any) => {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
};

const AccordionBody = () => {
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default Accordion;
