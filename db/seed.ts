import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { departments, pages, staff, applications } from './schema/school';

const db = drizzle(process.env.DATABASE_URL!);

async function seed() {
  console.log('🌱 Seeding database...');

  // Seed Departments
  console.log('Adding departments...');
  await db.insert(departments).values([
    {
      slug: 'tkj',
      name: 'Teknik Komputer dan Jaringan',
      description:
        'Jurusan TKJ mempelajari tentang instalasi, konfigurasi, dan pemeliharaan komputer serta jaringan. Siswa akan dibekali dengan keterampilan yang dibutuhkan di era digital.',
      imageUrl: null,
    },
    {
      slug: 'tsm',
      name: 'Teknik Sepeda Motor',
      description:
        'Jurusan TSM fokus pada pemeliharaan dan perbaikan sepeda motor. Kompetensi yang dipelajari mencakup berbagai sistem pada sepeda motor modern.',
      imageUrl: null,
    },
    {
      slug: 'tkr',
      name: 'Teknik Kendaraan Ringan',
      description:
        'Jurusan TKR mempelajari tentang perawatan dan perbaikan kendaraan ringan (mobil). Materi pembelajaran disesuaikan dengan perkembangan teknologi otomotif terkini.',
      imageUrl: null,
    },
  ]);

  // Seed Pages
  console.log('Adding pages...');
  await db.insert(pages).values([
    {
      slug: 'headmaster-welcome',
      title: 'Sambutan Kepala Sekolah',
      content: `Assalamu'alaikum Warahmatullahi Wabarakatuh,

Puji syukur kita panjatkan kehadirat Allah SWT yang telah memberikan rahmat dan karunia-Nya kepada kita semua.

Selamat datang di website SMK Bina Mandiri. Kami adalah lembaga pendidikan kejuruan yang berkomitmen untuk menghasilkan lulusan yang kompeten, profesional, dan berkarakter.

Di era digital ini, kami terus berinovasi dalam metode pembelajaran dan fasilitas untuk memastikan siswa-siswi kami siap menghadapi tantangan dunia kerja.

Kami mengajak seluruh stakeholder untuk bersama-sama memajukan pendidikan kejuruan di Indonesia.

Wassalamu'alaikum Warahmatullahi Wabarakatuh

Kepala Sekolah SMK Bina Mandiri`,
    },
    {
      slug: 'hubin',
      title: 'Hubungan Industri (HUBIN)',
      content: `SMK Bina Mandiri memiliki program Hubungan Industri (HUBIN) yang kuat untuk menjembatani siswa dengan dunia kerja.

Program HUBIN kami meliputi:

1. Praktik Kerja Lapangan (PKL)
   - Durasi: 3-6 bulan
   - Dilaksanakan di perusahaan mitra
   - Siswa mendapat pengalaman kerja nyata

2. Kerjasama dengan Industri
   - Dealer motor dan mobil resmi
   - Perusahaan IT dan teknologi
   - Bengkel dan workshop profesional

3. Job Fair dan Rekrutmen
   - Diadakan setiap tahun
   - Menghadirkan puluhan perusahaan
   - Tingkat penyerapan lulusan tinggi

4. Sertifikasi Kompetensi
   - Bekerjasama dengan LSP (Lembaga Sertifikasi Profesi)
   - Siswa mendapat sertifikat kompetensi
   - Meningkatkan daya saing lulusan

Untuk informasi lebih lanjut tentang program HUBIN, silakan hubungi bagian HUBIN sekolah kami.`,
    },
  ]);

  // Seed Sample Staff
  console.log('Adding sample staff...');
  await db.insert(staff).values([
    {
      name: 'Drs. Ahmad Suryanto, M.Pd',
      position: 'Kepala Sekolah',
      category: 'teacher',
      imageUrl: null,
      displayOrder: 1,
    },
    {
      name: 'Siti Nurhaliza, S.Pd',
      position: 'Wakil Kepala Sekolah',
      category: 'teacher',
      imageUrl: null,
      displayOrder: 2,
    },
    {
      name: 'Budi Santoso, S.Kom',
      position: 'Guru TKJ',
      category: 'teacher',
      imageUrl: null,
      displayOrder: 3,
    },
  ]);

  // Seed Sample Applications
  console.log('Adding sample applications...');
  await db.insert(applications).values([
    {
      name: 'E-Learning',
      description: 'Platform pembelajaran online untuk siswa dan guru',
      url: 'https://elearning.smkbinamandiri.sch.id',
      iconUrl: null,
    },
    {
      name: 'PPDB Online',
      description: 'Sistem pendaftaran peserta didik baru secara online',
      url: 'https://ppdb.smkbinamandiri.sch.id',
      iconUrl: null,
    },
  ]);

  console.log('✅ Seeding completed!');
}

seed()
  .catch((error) => {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
