function DeleteWorker({ onCLick, children }) {
  return (
    <button
      onClick={() => {
        onCLick();
      }}
    >
      {children}
    </button>
  );
}

export default DeleteWorker;
