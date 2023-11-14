type InputProps = {
  type: string;
  placeholder: string;
  id?: string;
  class_name?: string;
  // register?: {}
};

export default function Input({
  type,
  placeholder,
  id,
  class_name,
}: InputProps) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={class_name}
        name=""
        id={id}
      />
    </>
  );
}
