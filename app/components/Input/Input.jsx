import styles from "./input.module.css";

const Input = ({
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  ...props
} = {}) => (
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

export default Input;
