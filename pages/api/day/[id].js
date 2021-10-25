import sql from '../../../config';

export default async function handler(req, res) {
	try {
		console.log(req.query.id);
		const data = await sql.query(
			`SELECT a.NoTf,a.NoBukti,a.Tanggal,a.NoTcard,
			(SELECT Top 1 Evoucher from tReleaseEVoucherDtl Where TCardReal = a.NoTcard ) as Evoucher,
			(SELECT Top 1 SaldoFinal from tReleaseEVoucherDtl Where TCardReal = a.NoTcard ) as saldoTRelease,
			(SELECT TOP 1 TglInput From tEVoucherPerincian WHERE NoBukti = a.NoBukti ) as timeEvoucherPerincian,
			(SELECT TOP 1 TglInput From tTreatmentHdr WHERE NoNota = a.NoBukti ) as timeTreatmentHDR,
			(SELECT TOP 1 DiscOmset From tTreatmentHdr WHERE NoNota = a.NoBukti ) as discOmset,
			(SELECT TOP 1 TglInput FRom tTreatmentDtl WHERE NoNota = a.NoBukti ) as timeTreatmentDtl,
			(Select (Case When (Sum(AmountD)-Sum(AmountK)) is Null then 0 else 
                                (Sum(AmountD)-Sum(AmountK)) End) as Saldo From tEVoucherPerincian
                                Where (Hapus=0) and (Evoucher= (SELECT Top 1 Evoucher from tReleaseEVoucherDtl
								 Where TCardReal = a.NoTcard ) ) and ((Keterangan='Saldo Awal') 
                                                or (Keterangan='TREATMENT')
                                                or (Keterangan='Isi Ulang')
                                                or (Keterangan='Isi Ulang Exclusive')
                                                or (Keterangan='Refund TCard') 
                                                or (Keterangan='BATAL TREATMENT'))) as saldoCalculate
                            FROM tTreatmentBarcode a WHERE a.Tanggal = '${req.query.id}'`
		);
		console.log(data);
		res.send(JSON.stringify(data, null, 2));
	} catch (error) {
		res.send(error.message);
	}
}
