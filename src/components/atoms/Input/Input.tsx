import styles from './Input.module.css';

interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
}

export default function Input({
  type = 'text',
  placeholder,
  label,
}: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input type={type} placeholder={placeholder} className={styles.input} />
    </div>
  );
}
