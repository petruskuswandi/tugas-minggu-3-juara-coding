import React from 'react'

// Data dummy untuk daftar berkas
const fileList = [
  {
    id: 1,
    name: 'File 1.pdf',
    url: 'https://example.com/files/file1.pdf'
  },
  {
    id: 2,
    name: 'File 2.docx',
    url: 'https://example.com/files/file2.docx'
  },
  {
    id: 3,
    name: 'File 3.jpg',
    url: 'https://example.com/files/file3.jpg'
  }
]

const DownloadPage = () => {
  const handleDownload = (fileUrl) => {
    // Simulasikan unduhan berkas
    alert(`Mengunduh ${fileUrl}`)
  }

  return (
    <div>
      <h2>Selamat Datang di Halaman Download</h2>
      <h3>Daftar Berkas</h3>
      <ul>
        {fileList.map((file) => (
          <li key={file.id}>
            {file.name}
            <button onClick={() => handleDownload(file.url)}>Unduh</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DownloadPage