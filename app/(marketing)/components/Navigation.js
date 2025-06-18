// app/components/Navigation.js
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav style={{
      padding: '1rem 2rem', // เพิ่ม padding ด้านข้างให้ดูดีขึ้น
      backgroundColor: '#282c34', // เปลี่ยนพื้นหลังเป็นสีเข้ม
      color: '#fff', // เปลี่ยนสีข้อความเป็นขาว
      borderBottom: '2px solid #444', // ขอบล่างของ navigation
    }}>
      <ul style={{
        display: 'flex',
        gap: '2rem', // เพิ่มระยะห่างระหว่างเมนู
        listStyle: 'none',
        padding: 0,
        margin: 0,
        justifyContent: 'center', // จัดเมนูให้อยู่กลาง
      }}>
        <li style={{ fontSize: '1.2rem' }}>
          <Link href="/" style={{
            color: '#fff', // สีของลิงก์
            textDecoration: 'none', // เอาเส้นใต้ของลิงก์ออก
            transition: 'color 0.3s ease', // การเปลี่ยนสีเมื่อ hover
          }}>หน้าแรก</Link>
        </li>
        <li style={{ fontSize: '1.2rem' }}>
          <Link href="/about" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}>เกี่ยวกับ</Link>
        </li>
        <li style={{ fontSize: '1.2rem' }}>
          <Link href="/service" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}>บริการของเรา</Link>
        </li>
        <li style={{ fontSize: '1.2rem' }}>
          <Link href="/contact" style={{
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}>ติดต่อ</Link>
        </li>
      </ul>
    </nav>
  );
}
