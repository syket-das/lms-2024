import { StarIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Book } from 'lucide-react';

export function CategoryCard({ category }: { category: any }) {
  return (
    <Card className="max-w-[200px]">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{category?.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Book className="mr-1 h-3 w-3" />
            {category?.books?.length}
          </div>
          <div>Book Listed</div>
        </div>
      </CardContent>
    </Card>
  );
}
