import styles from "./input.module.css";

export default function Input({
  id,
  value,
  onChange,
  type,
  placeholder,
  ...props
}) {
  return (
    <input
      id={id}
      className={`${styles.input}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
}
