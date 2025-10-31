import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from '@/components/ui/blur-fade';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { Monitor, Bike, Car, Briefcase, CheckCircle, Award, Users, BookOpen, ArrowRight, GraduationCap } from 'lucide-react';

const departmentsData = {
  tkj: {
    name: 'Teknik Komputer dan Jaringan',
    shortName: 'TKJ',
    icon: Monitor,
    description:
      'Jurusan TKJ mempelajari tentang instalasi, konfigurasi, dan pemeliharaan komputer serta jaringan. Siswa akan dibekali dengan keterampilan yang dibutuhkan di era digital dan teknologi informasi modern.',
    longDescription:
      'Program keahlian Teknik Komputer dan Jaringan dirancang untuk menghasilkan teknisi yang kompeten dalam bidang IT, mampu merancang, menginstalasi, mengkonfigurasi, dan memelihara sistem komputer dan jaringan. Dengan kurikulum yang disesuaikan dengan kebutuhan industri, lulusan TKJ siap bersaing di dunia kerja.',
    skills: [
      'Instalasi dan konfigurasi sistem operasi',
      'Administrasi jaringan komputer',
      'Troubleshooting hardware dan software',
      'Keamanan jaringan dan cyber security',
      'Web development dan programming',
      'Server administration',
      'Cloud computing basics',
      'Database management',
    ],
    careers: [
      'Network Administrator',
      'IT Support Specialist',
      'System Administrator',
      'Web Developer',
      'Teknisi Komputer',
      'Network Engineer',
      'Database Administrator',
    ],
    facilities: [
      'Laboratorium komputer dengan 40 unit PC modern',
      'Perangkat jaringan (router, switch, access point)',
      'Server untuk praktik administrasi',
      'Software development tools terkini',
      'Akses internet berkecepatan tinggi',
    ],
    students: '120+',
    duration: '3 Tahun',
  },
  tsm: {
    name: 'Teknik Sepeda Motor',
    shortName: 'TSM',
    icon: Bike,
    description:
      'Jurusan TSM fokus pada pemeliharaan dan perbaikan sepeda motor dengan teknologi terkini. Kompetensi yang dipelajari mencakup berbagai sistem pada sepeda motor modern termasuk teknologi injeksi.',
    longDescription:
      'Program keahlian Teknik Sepeda Motor mempersiapkan siswa menjadi teknisi sepeda motor yang profesional. Dengan praktik langsung menggunakan unit sepeda motor berbagai merek, siswa akan menguasai teknik perawatan, perbaikan, dan diagnosa kerusakan sepeda motor modern.',
    skills: [
      'Sistem kelistrikan sepeda motor',
      'Mesin dan transmisi',
      'Sistem rem dan suspensi',
      'Tune-up dan servis berkala',
      'Diagnosa kerusakan dengan scanner',
      'Sistem injeksi bahan bakar (EFI)',
      'Modifikasi dan customizing',
      'Customer service dan komunikasi',
    ],
    careers: [
      'Mekanik Sepeda Motor',
      'Service Advisor',
      'Teknisi Bengkel Resmi',
      'Wirausaha Bengkel Motor',
      'Quality Control Otomotif',
      'Spare Part Specialist',
      'Technical Trainer',
    ],
    facilities: [
      'Bengkel praktik TSM lengkap dan modern',
      'Unit sepeda motor berbagai merek untuk praktik',
      'Peralatan diagnosa dan scanner modern',
      'Tools dan equipment standar industri',
      'Ruang teori ber-AC',
    ],
    students: '100+',
    duration: '3 Tahun',
  },
  tkr: {
    name: 'Teknik Kendaraan Ringan',
    shortName: 'TKR',
    icon: Car,
    description:
      'Jurusan TKR mempelajari tentang perawatan dan perbaikan kendaraan ringan (mobil). Materi pembelajaran disesuaikan dengan perkembangan teknologi otomotif terkini termasuk sistem hybrid dan electric vehicle.',
    longDescription:
      'Program keahlian Teknik Kendaraan Ringan membekali siswa dengan kompetensi dalam perawatan dan perbaikan mobil. Dengan fasilitas bengkel modern dan unit mobil untuk praktik, siswa akan menguasai berbagai sistem kendaraan ringan dari yang konvensional hingga teknologi terbaru.',
    skills: [
      'Sistem mesin kendaraan ringan',
      'Sistem kelistrikan otomotif',
      'Sistem rem dan kemudi',
      'AC mobil dan sistem pendingin',
      'Injeksi bahan bakar elektronik',
      'Transmisi manual dan otomatis',
      'Diagnosa dengan scanner OBD',
      'Sistem keselamatan kendaraan',
    ],
    careers: [
      'Mekanik Mobil',
      'Teknisi Otomotif',
      'Quality Control Otomotif',
      'Wirausaha Bengkel Mobil',
      'Service Advisor',
      'Spare Part Manager',
      'Technical Support',
    ],
    facilities: [
      'Bengkel praktik TKR modern dan luas',
      'Unit mobil berbagai merek untuk praktik',
      'Scanner dan diagnostic tools terkini',
      'Peralatan AC mobil lengkap',
      'Lifting equipment dan special tools',
    ],
    students: '90+',
    duration: '3 Tahun',
  },
};

export function generateStaticParams() {
  return [{ slug: 'tkj' }, { slug: 'tsm' }, { slug: 'tkr' }];
}

export default function DepartmentDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const dept = departmentsData[params.slug as keyof typeof departmentsData];

  if (!dept) {
    notFound();
  }

  const Icon = dept.icon;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <Icon className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                    {dept.shortName}
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    {dept.name}
                  </h1>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <p className="text-lg text-muted-foreground md:text-xl">
                {dept.description}
              </p>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div className="flex flex-wrap items-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{dept.students} Siswa Aktif</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Program {dept.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Sertifikat Kompetensi</span>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Department Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.2} inView>
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border bg-muted max-w-6xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <Icon className="h-24 w-24 mx-auto text-primary/40" />
                  <p className="text-sm text-muted-foreground">
                    Foto fasilitas dan kegiatan praktik {dept.shortName}
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* About Program */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Tentang Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {dept.longDescription}
                  </p>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Skills & Competencies */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Kompetensi yang Dipelajari
                </h2>
                <p className="text-muted-foreground">
                  Keterampilan dan pengetahuan yang akan dikuasai siswa
                </p>
              </div>
            </BlurFade>

            <div className="grid gap-4 md:grid-cols-2">
              {dept.skills.map((skill, index) => (
                <BlurFade key={index} delay={0.2 + index * 0.05} inView>
                  <BackgroundGradient className="rounded-[22px]">
                    <Card className="border-none shadow-none bg-white dark:bg-zinc-900">
                      <CardContent className="p-4 flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{skill}</span>
                      </CardContent>
                    </Card>
                  </BackgroundGradient>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Prospek Karir
                </h2>
                <p className="text-muted-foreground">
                  Peluang karir yang terbuka untuk lulusan {dept.shortName}
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <div className="flex flex-wrap gap-3 justify-center">
                {dept.careers.map((career, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-base px-4 py-2"
                  >
                    {career}
                  </Badge>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Fasilitas Praktik
                </h2>
                <p className="text-muted-foreground">
                  Fasilitas lengkap untuk mendukung pembelajaran praktik
                </p>
              </div>
            </BlurFade>

            <div className="grid gap-4">
              {dept.facilities.map((facility, index) => (
                <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-lg">{facility}</span>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.1} inView>
            <Card className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 border-none text-primary-foreground max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Tertarik dengan Program Ini?
                </h2>
                <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                  Bergabunglah dengan {dept.shortName} dan mulai perjalanan karirmu di bidang {dept.name.toLowerCase()}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="/spmb" className="group">
                      Daftar Sekarang
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Link href="/contact">Hubungi Kami</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}
