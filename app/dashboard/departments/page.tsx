import { db } from '@/db';
import { departments } from '@/db/schema/school';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function DepartmentsPage() {
  const deptList = await db.select().from(departments);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Jurusan</h1>
        <p className="text-muted-foreground">
          Kelola informasi kompetensi keahlian
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {deptList.length === 0 ? (
          <Card className="col-span-3">
            <CardContent className="text-center py-12 text-muted-foreground">
              <p>Belum ada data jurusan. Silakan tambahkan data jurusan terlebih dahulu.</p>
            </CardContent>
          </Card>
        ) : (
          deptList.map((dept) => (
            <Card key={dept.id}>
              <CardHeader>
                <CardTitle>{dept.name}</CardTitle>
                <CardDescription>{dept.slug.toUpperCase()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 line-clamp-3">{dept.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/dashboard/departments/${dept.id}`}>Edit</Link>
                </Button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
