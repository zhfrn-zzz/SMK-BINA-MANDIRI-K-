import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Tentang SMK Bina Mandiri</h1>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Profil Sekolah</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              SMK Bina Mandiri adalah sekolah menengah kejuruan yang berfokus pada
              pengembangan keterampilan teknis dan profesional siswa. Kami berkomitmen
              untuk menghasilkan lulusan yang siap kerja dan memiliki kompetensi tinggi
              di bidangnya.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Visi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Menjadi lembaga pendidikan kejuruan yang unggul dalam menghasilkan tenaga
              kerja profesional dan berkarakter.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Misi</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Menyelenggarakan pendidikan kejuruan yang berkualitas</li>
              <li>Mengembangkan keterampilan siswa sesuai kebutuhan industri</li>
              <li>Membentuk karakter siswa yang berintegritas dan profesional</li>
              <li>Menjalin kerjasama dengan dunia usaha dan industri</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fasilitas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-2">
                <li>Ruang kelas ber-AC</li>
                <li>Laboratorium komputer</li>
                <li>Bengkel praktik TSM dan TKR</li>
                <li>Perpustakaan</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li>Lapangan olahraga</li>
                <li>Masjid</li>
                <li>Kantin</li>
                <li>Area parkir luas</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
