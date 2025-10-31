/**
 * Seed Initial Data for SMK Bina Mandiri
 * Run this script to populate the database with initial content
 * 
 * Usage: npx tsx db/seed-initial-data.ts
 */

import { db } from './index';
import { pages, departments, staff, applications } from './schema/school';

async function seedInitialData() {
  console.log('🌱 Starting database seeding...');

  try {
    // 1. Seed Pages (Static Content)
    console.log('📄 Seeding pages...');
    
    const pagesData = [
      {
        slug: 'headmaster-welcome',
        title: 'Sambutan Kepala Sekolah',
        content: `Assalamu'alaikum Warahmatullahi Wabarakatuh,

Puji syukur kita panjatkan kehadirat Allah SWT yang telah memberikan rahmat dan karunia-Nya kepada kita semua. Shalawat serta salam semoga senantiasa tercurah kepada Nabi Muhammad SAW, keluarga, sahabat, dan para pengikutnya hingga akhir zaman.

Selamat datang di website resmi SMK Bina Mandiri. Melalui website ini, kami berharap dapat memberikan informasi yang lengkap dan akurat mengenai profil sekolah, program keahlian, kegiatan pembelajaran, prestasi siswa, dan berbagai informasi penting lainnya.

SMK Bina Mandiri berkomitmen untuk menghasilkan lulusan yang kompeten, berkarakter, dan siap bersaing di dunia kerja maupun melanjutkan pendidikan ke jenjang yang lebih tinggi. Kami terus berupaya meningkatkan kualitas pendidikan melalui pengembangan kurikulum yang relevan dengan kebutuhan industri, peningkatan kompetensi guru, dan penyediaan fasilitas pembelajaran yang memadai.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.

Drs. H. Ahmad Suryadi, M.Pd
Kepala Sekolah SMK Bina Mandiri`,
      },
      {
        slug: 'about',
        title: 'Tentang SMK Bina Mandiri',
        content: `SMK Bina Mandiri adalah sekolah menengah kejuruan yang berkomitmen menghasilkan lulusan kompeten, berkarakter, dan siap bersaing di dunia kerja maupun industri.

VISI:
Menjadi SMK unggulan yang menghasilkan lulusan kompeten, berkarakter, dan siap kerja dengan mengedepankan nilai-nilai profesionalisme dan keunggulan dalam bidang teknologi dan keterampilan.

MISI:
1. Menyelenggarakan pendidikan kejuruan yang berkualitas dan relevan dengan kebutuhan industri
2. Mengembangkan kerjasama dengan dunia usaha dan industri
3. Membentuk karakter siswa yang berakhlak mulia dan profesional
4. Menyediakan fasilitas pembelajaran yang modern dan memadai

SEJARAH:
SMK Bina Mandiri didirikan dengan tujuan untuk menyediakan pendidikan kejuruan berkualitas yang dapat mempersiapkan siswa menghadapi tantangan dunia kerja. Sejak berdiri, sekolah kami telah menghasilkan ribuan lulusan yang sukses berkarir di berbagai bidang industri.`,
      },
      {
        slug: 'hubin',
        title: 'Hubungan Industri (HUBIN)',
        content: `Hubungan Industri (HUBIN) SMK Bina Mandiri berperan penting dalam memfasilitasi kerjasama antara sekolah dengan dunia usaha dan dunia industri (DUDI). Melalui program HUBIN, kami memastikan siswa mendapatkan pengalaman praktis yang relevan dengan kebutuhan industri.

PROGRAM HUBIN:
1. Praktik Kerja Lapangan (PKL) - Program magang di perusahaan partner
2. Kunjungan Industri - Kunjungan ke berbagai perusahaan
3. Sertifikasi Kompetensi - Program sertifikasi untuk siswa
4. Job Fair - Bursa kerja untuk lulusan
5. Pelatihan Industri - Pelatihan dari praktisi industri
6. Teaching Factory - Pembelajaran berbasis produksi

MITRA INDUSTRI:
- PT. Teknologi Indonesia (IT & Software)
- CV. Maju Motor (Otomotif)
- PT. Astra International (Otomotif)
- PT. Telkom Indonesia (Telekomunikasi)
- Dan masih banyak lagi...

Kami berkomitmen untuk terus memperluas jaringan kerjasama dengan berbagai perusahaan dan industri.`,
      },
    ];

    for (const page of pagesData) {
      await db.insert(pages).values(page).onConflictDoNothing();
    }
    console.log('✅ Pages seeded successfully');

    // 2. Seed Departments
    console.log('🎓 Seeding departments...');
    
    const departmentsData = [
      {
        slug: 'tkj',
        name: 'Teknik Komputer dan Jaringan',
        description: 'Jurusan TKJ mempelajari tentang instalasi, konfigurasi, dan pemeliharaan komputer serta jaringan. Siswa akan dibekali dengan keterampilan yang dibutuhkan di era digital dan teknologi informasi modern.',
        imageUrl: null,
      },
      {
        slug: 'tsm',
        name: 'Teknik Sepeda Motor',
        description: 'Jurusan TSM fokus pada pemeliharaan dan perbaikan sepeda motor dengan teknologi terkini. Kompetensi yang dipelajari mencakup berbagai sistem pada sepeda motor modern termasuk teknologi injeksi.',
        imageUrl: null,
      },
      {
        slug: 'tkr',
        name: 'Teknik Kendaraan Ringan',
        description: 'Jurusan TKR mempelajari tentang perawatan dan perbaikan kendaraan ringan (mobil). Materi pembelajaran disesuaikan dengan perkembangan teknologi otomotif terkini termasuk sistem hybrid dan electric vehicle.',
        imageUrl: null,
      },
    ];

    for (const dept of departmentsData) {
      await db.insert(departments).values(dept).onConflictDoNothing();
    }
    console.log('✅ Departments seeded successfully');

    // 3. Seed Sample Staff
    console.log('👥 Seeding staff...');
    
    const staffData = [
      {
        name: 'Drs. H. Ahmad Suryadi, M.Pd',
        position: 'Kepala Sekolah',
        category: 'leadership',
        imageUrl: null,
        displayOrder: 1,
      },
      {
        name: 'Siti Nurhaliza, S.Pd',
        position: 'Wakil Kepala Sekolah Kurikulum',
        category: 'leadership',
        imageUrl: null,
        displayOrder: 2,
      },
      {
        name: 'Budi Santoso, S.Kom',
        position: 'Ketua Jurusan TKJ',
        category: 'teacher',
        imageUrl: null,
        displayOrder: 3,
      },
      {
        name: 'Ahmad Rizki, S.T',
        position: 'Ketua Jurusan TSM',
        category: 'teacher',
        imageUrl: null,
        displayOrder: 4,
      },
      {
        name: 'Eko Prasetyo, S.T',
        position: 'Ketua Jurusan TKR',
        category: 'teacher',
        imageUrl: null,
        displayOrder: 5,
      },
    ];

    for (const staffMember of staffData) {
      await db.insert(staff).values(staffMember).onConflictDoNothing();
    }
    console.log('✅ Staff seeded successfully');

    // 4. Seed Sample Applications
    console.log('📱 Seeding applications...');
    
    const applicationsData = [
      {
        name: 'Portal Siswa',
        description: 'Akses informasi akademik, jadwal, dan nilai',
        url: '/portal',
        iconUrl: null,
      },
      {
        name: 'E-Learning',
        description: 'Platform pembelajaran online',
        url: '/elearning',
        iconUrl: null,
      },
      {
        name: 'Perpustakaan Digital',
        description: 'Akses koleksi buku dan jurnal digital',
        url: '/library',
        iconUrl: null,
      },
    ];

    for (const app of applicationsData) {
      await db.insert(applications).values(app).onConflictDoNothing();
    }
    console.log('✅ Applications seeded successfully');

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('\n📊 Summary:');
    console.log(`   - ${pagesData.length} pages`);
    console.log(`   - ${departmentsData.length} departments`);
    console.log(`   - ${staffData.length} staff members`);
    console.log(`   - ${applicationsData.length} applications`);
    console.log('\n✨ You can now access the dashboard and edit the content!');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

// Run the seeder
seedInitialData()
  .then(() => {
    console.log('\n✅ Seeding process finished');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Seeding process failed:', error);
    process.exit(1);
  });
