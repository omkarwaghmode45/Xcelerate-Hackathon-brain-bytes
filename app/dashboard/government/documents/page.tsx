"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { documents } from "@/lib/dummy-data"
import {
  FileText,
  FileCheck,
  FileWarning,
  FileX,
  Download,
  Eye,
} from "lucide-react"

function getDocIcon(type: string) {
  switch (type) {
    case "title_deed":
      return FileCheck
    case "permit":
      return FileText
    case "clearance":
      return FileCheck
    case "survey":
      return FileText
    default:
      return FileText
  }
}

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
          Pending
        </Badge>
      )
    case "rejected":
      return <Badge variant="destructive" className="text-[10px]">Rejected</Badge>
    default:
      return <Badge variant="secondary" className="text-[10px]">{status}</Badge>
  }
}

export default function DocumentsPage() {
  return (
    <DashboardLayout role="government">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              Document Verification
            </h1>
            <p className="text-sm text-muted-foreground">
              Review and verify land ownership documents, permits, and
              clearance certificates.
            </p>
          </div>
          <div className="flex gap-2 text-sm text-muted-foreground">
            <Badge variant="outline">
              {documents.filter((d) => d.status === "verified").length} Verified
            </Badge>
            <Badge variant="outline">
              {documents.filter((d) => d.status === "pending").length} Pending
            </Badge>
          </div>
        </div>

        {/* Document Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc) => {
            const DocIcon = getDocIcon(doc.type)
            return (
              <Card key={doc.id}>
                <CardContent className="flex flex-col gap-4 p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <DocIcon className="h-5 w-5 text-primary" />
                    </div>
                    {getStatusBadge(doc.status)}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-card-foreground">
                      {doc.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Uploaded by: {doc.uploadedBy}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Date: {doc.date}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="mr-1 h-3 w-3" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                  {doc.status === "pending" && (
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Approve
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="flex-1"
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
