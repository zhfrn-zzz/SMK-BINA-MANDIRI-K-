import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Bike, Car } from 'lucide-react';

const departments = [
  {
    slug: 'tkj',
    name: 'Teknik Komputer dan Jaringan',
    shortName: 'TKJ',
    icon: Monitor,
    description: 'Mempelajari instalasi, konfigurasi, dan pemeliharaan komputer serta jaringan.',
    skills: [
      'Instalasi dan konfigurasi sistem operasi',
      'Administrasi jaringan komputer',
      'Troubleshooting hardware dan software',
      'Keamanan jaringan',
      'Web development dasar',
    ],
  },
  {
    slug: 'tsm',
    name: 'Teknik Sepeda Motor',
    shortName: 'TSM',
    icon: Bike,
    description: 'Fokus pada pemeliharaan dan perbaikan sepeda motor dengan teknologi terkini.',
    skills: [
      'Sistem kelistrikan sepeda motor',
      'Mesin dan transmisi',
      'Sistem rem dan suspensi',
      'Tune-up dan servis berkala',
      'Diagnosa kerusakan',
    ],
  },
  {
    slug: 'tkr',
    name: 'Teknik Kendaraan Ringan',
    shortName: 'TKR',
    icon: Car,
    description: 'Mempelajari perawatan dan perbaikan kendaraan ringan (mobil).',
    skills: [
      'Sistem mesin kendaraan ringan',
      'Sistem kelistrikan otomotif',
      'Sistem rem dan kemudi',
      'AC mobil',
      'Injeksi bahan bakar',
    ],
  },
];

export default function DepartmentsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Kompetensi Keahlian</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          SMK Bina Mandiri menawarkan tiga kompetensi keahlian yang dirancang untuk
          mempersiapkan siswa menghadapi dunia kerja.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {departments.map((dept) => {
          const Icon = dept.icon;
          return (
            <Card key={dept.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>{dept.name}</CardTitle>
                <CardDescription>{dept.shortName}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{dept.description}</p>
                <div className="mb-4">
                  <p className="font-semibold mb-2 text-sm">Kompetensi:</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    {dept.skills.slice(0, 3).map((skill, idx) => (
                      <li key={idx}>• {skill}</li>
                    ))}
                  </ul>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/departments/${dept.slug}`}>Selengkapnya</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
