"use client";

export default function AddToBucketButton({ product }: { product: any }) {
  const handleAdd = () => {
    const existing = JSON.parse(localStorage.getItem("sge_bucket") || "[]");
    existing.push(product);
    localStorage.setItem("sge_bucket", JSON.stringify(existing));
    alert("Added to Bucket successfully!");
  };

  return (
    <button 
      onClick={handleAdd}
      style={{ flex: 1, padding: '1rem', backgroundColor: 'var(--brand)', color: 'white', fontWeight: 'bold', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
    >
      Add to Bucket
    </button>
  );
}
