import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from '@/components/ui/blur-fade';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { Monitor, Bike, Car, Users, Award, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';

const departments = [
  {
    slug: 'tkj',
    name: 'Teknik Komputer dan Jaringan',
    shortName: 'TKJ',
    icon: Monitor,
    description: 'Mempelajari instalasi, konfigurasi, dan pemeliharaan komputer serta jaringan dengan teknologi terkini',
    students: '120+ Siswa',
    duration: '3 Tahun',
    certification: 'Sertifikat Kompetensi',
  },
  {
    slug: 'tsm',
    name: 'Teknik Sepeda Motor',
    shortName: 'TSM',
    icon: Bike,
    description: 'Fokus pada pemeliharaan dan perbaikan sepeda motor dengan standar industri modern',
    students: '100+ Siswa',
    duration: '3 Tahun',
    certification: 'Sertifikat Kompetensi',
  },
  {
    slug: 'tkr',
    name: 'Teknik Kendaraan Ringan',
    shortName: 'TKR',
    icon: Car,
    description: 'Mempelajari perawatan dan perbaikan kendaraan ringan (mobil) dengan teknologi terkini',
    students: '90+ Siswa',
    duration: '3 Tahun',
    certification: 'Sertifikat Kompetensi',
  },
];

export default function DepartmentsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                Program Keahlian
              </Badge>
            </BlurFade>
            
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Kompetensi Keahlian
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
                SMK Bina Mandiri menawarkan tiga kompetensi keahlian yang dirancang untuk 
                mempersiapkan siswa menghadapi tantangan dunia kerja dan industri
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {departments.map((dept, index) => (
              <BlurFade key={dept.slug} delay={0.2 + index * 0.1} inView>
                <Link href={`/departments/${dept.slug}`} className="group block h-full">
                  <BackgroundGradient className="rounded-[22px] h-full">
                    <Card className="h-full border-none shadow-none bg-white dark:bg-zinc-900 overflow-hidden">
                      {/* Icon Header */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary via-accent to-primary">
                        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <dept.icon className="h-20 w-20 text-white/90 transition-transform group-hover:scale-110" />
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-primary hover:bg-white">
                            {dept.shortName}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors text-xl">
                          {dept.name}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {dept.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{dept.students}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="h-4 w-4 text-primary" />
                            <span className="text-muted-foreground">{dept.duration}</span>
                          </div>
                        </div>

                        <Button variant="ghost" className="group/btn w-full justify-between">
                          Lihat Detail
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </BackgroundGradient>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Keunggulan Program Kami
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Mengapa memilih program keahlian di SMK Bina Mandiri
              </p>
            </div>
          </BlurFade>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: 'Kurikulum Industri',
                description: 'Kurikulum yang disesuaikan dengan kebutuhan dunia industri modern',
                delay: 0.2,
              },
              {
                icon: Users,
                title: 'Instruktur Berpengalaman',
                description: 'Dibimbing oleh instruktur profesional dan bersertifikat',
                delay: 0.3,
              },
              {
                icon: Briefcase,
                title: 'Program PKL',
                description: 'Praktik kerja lapangan di perusahaan partner terkemuka',
                delay: 0.4,
              },
            ].map((feature, index) => (
              <BlurFade key={index} delay={feature.delay} inView>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Peluang Karir Lulusan
                </h2>
                <p className="text-muted-foreground">
                  Berbagai peluang karir menanti lulusan SMK Bina Mandiri
                </p>
              </div>
            </BlurFade>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Network Administrator',
                'IT Support Specialist',
                'Mekanik Sepeda Motor',
                'Service Advisor',
                'Teknisi Kendaraan Ringan',
                'Quality Control Inspector',
                'Web Developer',
                'Wirausaha Bengkel',
              ].map((career, index) => (
                <BlurFade key={index} delay={0.2 + index * 0.05} inView>
                  <Card>
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{career}</span>
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
            <Card className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 border-none text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Siap Memulai Karirmu?
                </h2>
                <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                  Pilih jurusan yang sesuai dengan minat dan bakatmu
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
