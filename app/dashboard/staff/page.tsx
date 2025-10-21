import { db } from '@/db';
import { staff } from '@/db/schema/school';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { DataTable } from '@/components/data-table';

export default async function StaffPage() {
  const staffList = await db.select().from(staff).orderBy(staff.displayOrder);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Staff & Guru</h1>
          <p className="text-muted-foreground">
            Kelola data guru dan tenaga kependidikan
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/staff/new">
            <Plus className="mr-2 h-4 w-4" />
            Tambah Staff
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Staff</CardTitle>
          <CardDescription>
            Total: {staffList.length} orang
          </CardDescription>
        </CardHeader>
        <CardContent>
          {staffList.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>Belum ada data staff.</p>
              <Button asChild className="mt-4" variant="outline">
                <Link href="/dashboard/staff/new">Tambah Staff Pertama</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {staffList.map((person) => (
                <div
                  key={person.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    {person.imageUrl && (
                      <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
                        <img
                          src={person.imageUrl}
                          alt={person.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="font-semibold">{person.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {person.position} • {person.category === 'teacher' ? 'Guru' : 'Tenaga Kependidikan'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/dashboard/staff/${person.id}`}>Edit</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
