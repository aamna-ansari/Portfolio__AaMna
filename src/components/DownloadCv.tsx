// import cv from "@/public/"

const DownloadCv = () => {
  const handleDownload = () => {
    // const link = document.createElement('a');
    // link.href = '/cv.pdf'; // Update this to the correct path to your PDF
    // link.download = 'cv.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    console.log("hello");
  };

  return (
    <button
      onClick={handleDownload}
      //   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
    >
      Download PDF
    </button>
  );
};

export default DownloadCv;
