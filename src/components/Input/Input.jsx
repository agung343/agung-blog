import "./Input.css"

export default function Input({ id, label, textarea, ...props }) {
  return (
    <>
      <p>
        <label htmlFor={id}>{label}</label>
        {textarea ? (
          <textarea name={id} id={id} rows={10} cols={20} {...props} />
        ) : (
          <input name={id} id={id} {...props} />
        )}
      </p>
    </>
  );
}
