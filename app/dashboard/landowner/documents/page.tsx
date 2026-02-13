"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { documents } from "@/lib/dummy-data"
import { FileText, FileCheck, Upload, Eye, Download } from "lucide-react"

// Simulate landowner only seeing their own docs
const myDocs = documents.filter(
  (d) =>
    d.uploadedBy === "Sharma Industries Pvt Ltd" ||
    d.uploadedBy === "Government Surveyor"
)

function getStatusBadge(status: string) {
  switch (status) {
    case "verified":
      return (
        <Badge className="bg-accent text-accent-foreground text-[10px]">
          Verified
        </Badge>
      )
    case "pending":
      return (
        <Badge className="bg-warning text-warning-foreground text-[10px]">
          Pending Review
        </Badge>
      )
    case "rejected":
      return <Badge variant="destructive" className="text-[10px]">Rejected</Badge>
    default:
      return <Badge variant="secondary" className="text-[10px]">{status}</Badge>
  }
}

export default function OwnerDocumentsPage() {
  return (
    <DashboardLayout role="landowner">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              My Documents
            </h1>
            <p className="text-sm text-muted-foreground">
              Government permission documents and property records.
            </p>
          </div>
          <Button size="sm">
            <Upload className="mr-1 h-3 w-3" />
            Upload Document
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {myDocs.map((doc) => (
            <Card key={doc.id}>
              <CardContent className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    {doc.type === "title_deed" || doc.type === "clearance" ? (
                      <FileCheck className="h-5 w-5 text-primary" />
                    ) : (
                      <FileText className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-card-foreground">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Uploaded: {doc.date} &middot; Type:{" "}
                      {doc.type.replace("_", " ")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {getStatusBadge(doc.status)}
                  <Button variant="outline" size="sm">
                    <Eye className="mr-1 h-3 w-3" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-1 h-3 w-3" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
