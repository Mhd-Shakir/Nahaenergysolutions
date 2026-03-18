import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Lead from '@/models/Lead';

export async function GET() {
  try {
    await dbConnect();
    // Use .sort({ createdAt: -1 }) to get newest leads first
    const leads = await Lead.find({}).sort({ createdAt: -1 });
    
    // Convert Mongoose _id to id to match our frontend interface without conflicts
    const formattedLeads = leads.map(lead => {
      const { _id, ...rest } = lead.toObject();
      return { id: _id.toString(), ...rest };
    });
    
    return NextResponse.json(formattedLeads);
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const newLead = await request.json();
    
    const lead = await Lead.create({
      ...newLead,
      status: "New",
    });

    const formattedLead = { ...lead.toObject(), id: lead._id.toString() };

    return NextResponse.json({ success: true, lead: formattedLead });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ error: 'Failed to complete quote request' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    await dbConnect();
    const { id, status } = await request.json();
    
    await Lead.findByIdAndUpdate(id, { status });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('PATCH Error:', error);
    return NextResponse.json({ error: 'Failed to update status' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    await Lead.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE Error:', error);
    return NextResponse.json({ error: 'Failed to delete lead' }, { status: 500 });
  }
}
