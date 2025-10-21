import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Bike, Car, Briefcase } from 'lucide-react';

const departmentsData = {
  tkj: {
    name: 'Teknik Komputer dan Jaringan',
    shortName: 'TKJ',
    icon: Monitor,
    description:
      'Jurusan TKJ mempelajari tentang instalasi, konfigurasi, dan pemeliharaan komputer serta jaringan. Siswa akan dibekali dengan keterampilan yang dibutuhkan di era digital.',
    skills: [
      'Instalasi dan konfigurasi sistem operasi',
      'Administrasi jaringan komputer',
      'Troubleshooting hardware dan software',
      'Keamanan jaringan',
      'Web development dasar',
      'Server administration',
      'Cloud computing basics',
    ],
    careers: [
      'Network Administrator',
      'IT Support',
      'System Administrator',
      'Web Developer',
      'Teknisi Komputer',
    ],
    facilities: [
      'Laboratorium komputer dengan 40 unit PC',
      'Perangkat jaringan (router, switch, access point)',
      'Server untuk praktik administrasi',
      'Software development tools',
    ],
  },
  tsm: {
    name: 'Teknik Sepeda Motor',
    shortName: 'TSM',
    icon: Bike,
    description:
      'Jurusan TSM fokus pada pemeliharaan dan perbaikan sepeda motor. Kompetensi yang dipelajari mencakup berbagai sistem pada sepeda motor modern.',
    skills: [
      'Sistem kelistrikan sepeda motor',
      'Mesin dan transmisi',
      'Sistem rem dan suspensi',
      'Tune-up dan servis berkala',
      'Diagnosa kerusakan',
      'Sistem injeksi bahan bakar',
      'Modifikasi sepeda motor',
    ],
    careers: [
      'Mekanik sepeda motor',
      'Service advisor',
      'Teknisi bengkel',
      'Wirausaha bengkel motor',
      'Quality control otomotif',
    ],
    facilities: [
      'Bengkel praktik TSM lengkap',
      'Unit sepeda motor untuk praktik',
      'Peralatan diagnosa modern',
      'Tools dan equipment standar industri',
    ],
  },
  tkr: {
    name: 'Teknik Kendaraan Ringan',
    shortName: 'TKR',
    icon: Car,
    description:
      'Jurusan TKR mempelajari tentang perawatan dan perbaikan kendaraan ringan (mobil). Materi pembelajaran disesuaikan dengan perkembangan teknologi otomotif terkini.',
    skills: [
      'Sistem mesin kendaraan ringan',
      'Sistem kelistrikan otomotif',
      'Sistem rem dan kemudi',
      'AC mobil',
      'Injeksi bahan bakar',
      'Transmisi otomatis',
      'Diagnosa dengan scanner',
    ],
    careers: [
      'Mekanik mobil',
      'Teknisi otomotif',
      'Quality control otomotif',
      'Wirausaha bengkel mobil',
      'Service advisor',
    ],
    facilities: [
      'Bengkel praktik TKR modern',
      'Unit mobil untuk praktik',
      'Scanner dan diagnostic tools',
      'Peralatan AC mobil',
    ],
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
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-primary/10 rounded-lg">
            <Icon className="h-12 w-12 text-primary" />
          </div>
          <div>
            <Badge className="mb-2">{dept.shortName}</Badge>
            <h1 className="text-4xl font-bold">{dept.name}</h1>
          </div>
        </div>

        {/* Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Deskripsi Program</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{dept.description}</p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Kompetensi yang Dipelajari</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-3">
              {dept.skills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Careers */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <CardTitle>Prospek Karir</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {dept.careers.map((career, idx) => (
                <Badge key={idx} variant="secondary">
                  {career}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Facilities */}
        <Card>
          <CardHeader>
            <CardTitle>Fasilitas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {dept.facilities.map((facility, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{facility}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
