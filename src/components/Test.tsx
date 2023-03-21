export default function Test() {
  const myListBox = [
    "option_1",
    "option_2",
    "option_3",
    "option_4",
    "option_5",
  ];

  return (
    <>
      <select name="Name_of_list_box" >
        {myListBox.map((item: string, index: number) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </>
  );
}
