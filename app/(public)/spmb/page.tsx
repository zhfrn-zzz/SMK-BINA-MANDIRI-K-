import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlurFade } from '@/components/ui/blur-fade';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { Calendar, FileText, DollarSign, CheckCircle, ArrowRight, ClipboardList, UserCheck, GraduationCap } from 'lucide-react';

export default function SPMBPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BlurFade delay={0.1} inView>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                PPDB 2024/2025
              </Badge>
            </BlurFade>
            
            <BlurFade delay={0.2} inView>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Penerimaan Peserta Didik Baru
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto mb-8">
                Bergabunglah dengan SMK Bina Mandiri dan wujudkan masa depan cemerlang Anda! 
                Pendaftaran dibuka untuk tahun ajaran 2024/2025
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <Link href="/contact" className="group">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <BlurFade delay={0.1} inView>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Alur Pendaftaran
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Ikuti langkah-langkah berikut untuk mendaftar sebagai siswa baru
              </p>
            </div>
          </BlurFade>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                icon: ClipboardList,
                step: '1',
                title: 'Isi Formulir',
                description: 'Lengkapi formulir pendaftaran dengan data yang benar',
                delay: 0.2,
              },
              {
                icon: FileText,
                step: '2',
                title: 'Siapkan Berkas',
                description: 'Kumpulkan dokumen persyaratan yang diperlukan',
                delay: 0.3,
              },
              {
                icon: UserCheck,
                step: '3',
                title: 'Tes Masuk',
                description: 'Ikuti tes masuk dan wawancara',
                delay: 0.4,
              },
              {
                icon: GraduationCap,
                step: '4',
                title: 'Pengumuman',
                description: 'Cek hasil pengumuman dan daftar ulang',
                delay: 0.5,
              },
            ].map((step, index) => (
              <BlurFade key={index} delay={step.delay} inView>
                <Card className="h-full text-center hover:shadow-lg transition-shadow relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardHeader className="pt-8">
                    <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Persyaratan Pendaftaran
                </h2>
                <p className="text-muted-foreground">
                  Dokumen yang harus disiapkan untuk mendaftar
                </p>
              </div>
            </BlurFade>

            <div className="grid gap-4">
              {[
                'Lulusan SMP/MTs atau sederajat',
                'Fotocopy ijazah dan SKHUN (menyusul jika belum ada)',
                'Fotocopy Kartu Keluarga',
                'Pas foto 3x4 (3 lembar) background merah',
                'Fotocopy Akta Kelahiran',
                'Fotocopy KTP orang tua/wali',
                'Surat keterangan sehat dari dokter',
                'Surat kelakuan baik dari sekolah asal',
              ].map((requirement, index) => (
                <BlurFade key={index} delay={0.2 + index * 0.05} inView>
                  <BackgroundGradient className="rounded-[22px]">
                    <Card className="border-none shadow-none bg-white dark:bg-zinc-900">
                      <CardContent className="p-4 flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{requirement}</span>
                      </CardContent>
                    </Card>
                  </BackgroundGradient>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Jadwal Pendaftaran
                </h2>
                <p className="text-muted-foreground">
                  Timeline penerimaan peserta didik baru tahun ajaran 2024/2025
                </p>
              </div>
            </BlurFade>

            <div className="space-y-4">
              {[
                {
                  badge: 'Gelombang 1',
                  period: 'Januari - Maret 2024',
                  status: 'Dibuka',
                  statusVariant: 'default' as const,
                  delay: 0.2,
                },
                {
                  badge: 'Gelombang 2',
                  period: 'April - Juni 2024',
                  status: 'Segera',
                  statusVariant: 'secondary' as const,
                  delay: 0.3,
                },
                {
                  badge: 'Tes Masuk',
                  period: 'Juli 2024',
                  status: 'Menunggu',
                  statusVariant: 'outline' as const,
                  delay: 0.4,
                },
                {
                  badge: 'Pengumuman',
                  period: 'Akhir Juli 2024',
                  status: 'Menunggu',
                  statusVariant: 'outline' as const,
                  delay: 0.5,
                },
              ].map((schedule, index) => (
                <BlurFade key={index} delay={schedule.delay} inView>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex-1">
                          <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                            {schedule.badge}
                          </Badge>
                          <p className="font-semibold text-lg">{schedule.period}</p>
                        </div>
                        <Badge variant={schedule.statusVariant} className="text-sm px-4 py-1">
                          {schedule.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <BlurFade delay={0.1} inView>
              <div className="mb-12 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Biaya Pendaftaran
                </h2>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <BackgroundGradient className="rounded-[22px]">
                <Card className="border-none shadow-none bg-white dark:bg-zinc-900">
                  <CardContent className="p-12 text-center">
                    <p className="text-5xl font-bold text-primary mb-4">Rp 200.000</p>
                    <p className="text-lg text-muted-foreground mb-6">
                      Sudah termasuk formulir dan tes masuk
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span>Formulir Pendaftaran</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span>Biaya Tes Masuk</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        <span>Konsultasi Jurusan</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </BackgroundGradient>
            </BlurFade>
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
                  Siap Mendaftar?
                </h2>
                <p className="mb-8 text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                  Hubungi kami untuk informasi lebih lanjut atau kunjungi sekolah kami langsung
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="/contact" className="group">
                      Hubungi Kami
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Link href="/about">Tentang Sekolah</Link>
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
