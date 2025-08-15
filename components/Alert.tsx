interface AlertProps {
  type: "success" | "error";
  children?: React.ReactNode;
  errors?: string[];
}

export default function Alert({ type, children, errors }: AlertProps) {
  const baseStyle = "rounded-xl p-6 mb-6 border text-center sm:text-left";
  const styles =
    type === "success"
      ? "bg-green-500/20 border-green-500/50 text-green-400"
      : "bg-red-500/20 border-red-500/50 text-red-400";

  return (
    <div className={`${baseStyle} ${styles}`}>
      {errors ? (
        <ul className="space-y-1">
          {errors.map((err, idx) => (
            <li key={idx}>• {err}</li>
          ))}
        </ul>
      ) : (
        children
      )}
    </div>
  );
}
