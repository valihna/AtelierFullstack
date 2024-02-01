function LoginInput({ label, type, name, value, onChange, placeholder }) {
  return (
    <label className="parent-label">
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </label>
  );
}

export default LoginInput;
