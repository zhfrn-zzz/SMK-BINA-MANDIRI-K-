import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, Briefcase, GraduationCap, Award, TrendingUp } from 'lucide-react';

export default function HubinPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">HUBIN</h1>
          <p className="text-xl text-muted-foreground mb-2">Hubungan Industri</p>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                HUBIN (Hubungan Industri) SMK Bina Mandiri merupakan unit yang mengelola kerjasama antara sekolah dengan dunia usaha dan dunia industri (DUDI). Melalui HUBIN, kami memastikan bahwa pembelajaran di sekolah selaras dengan kebutuhan industri, sehingga lulusan kami siap kerja dan memiliki kompetensi yang dibutuhkan oleh pasar kerja.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Main Programs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Praktik Kerja Industri (PRAKERIN)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Program magang siswa di perusahaan mitra selama 3-6 bulan untuk mendapatkan pengalaman kerja nyata dan meningkatkan kompetensi.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Kunjungan Industri</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Kegiatan kunjungan siswa ke perusahaan untuk melihat langsung proses produksi dan teknologi yang digunakan di industri.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Teaching Factory</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Pembelajaran berbasis produksi/jasa yang mengacu pada standar dan prosedur yang berlaku di industri.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Sertifikasi Kompetensi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Program sertifikasi profesi bagi siswa melalui Lembaga Sertifikasi Profesi (LSP) untuk meningkatkan daya saing lulusan.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Job Fair & Recruitment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Bursa kerja khusus (job fair) yang mempertemukan lulusan dengan perusahaan yang membutuhkan tenaga kerja.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Bursa Kerja Khusus (BKK)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Layanan informasi lowongan kerja dan penempatan kerja bagi lulusan SMK Bina Mandiri.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Industry Partners */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Mitra Industri</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              SMK Bina Mandiri telah menjalin kerjasama dengan berbagai perusahaan dan industri terkemuka, antara lain:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Bidang Teknik Komputer & Jaringan:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>PT. Telkom Indonesia</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>PT. Indosat Ooredoo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>PT. XL Axiata</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Berbagai perusahaan IT & Software House</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Bidang Teknik Otomotif:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>PT. Astra Honda Motor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>PT. Yamaha Indonesia Motor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>PT. Toyota Astra Motor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Berbagai bengkel resmi & authorized dealer</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Mitra Industri</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-sm text-muted-foreground">Tingkat Penyerapan Lulusan</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <p className="text-sm text-muted-foreground">Siswa PRAKERIN/Tahun</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-sm text-muted-foreground">Siswa Tersertifikasi</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Hubungi HUBIN</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Untuk informasi lebih lanjut mengenai kerjasama industri, PRAKERIN, atau lowongan kerja, silakan hubungi:
            </p>
            <div className="space-y-2">
              <p><span className="font-semibold">Koordinator HUBIN:</span> Bapak Drs. Bambang Sutrisno</p>
              <p><span className="font-semibold">Email:</span> hubin@smkbinamandiri.sch.id</p>
              <p><span className="font-semibold">Telepon:</span> (021) 1234-5678 ext. 102</p>
              <p><span className="font-semibold">WhatsApp:</span> +62 812-3456-7890</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
